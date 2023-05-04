package com.sorsix.forum.service

import com.sorsix.forum.domain.User
import com.sorsix.forum.domain.UserDto
import com.sorsix.forum.repository.PostRepository
import com.sorsix.forum.repository.TagRepository
import com.sorsix.forum.repository.UserRepository
import org.springframework.stereotype.Service
import java.time.LocalDateTime

@Service
class UserService(private val repository: UserRepository,
                  private val postRepository: PostRepository,
                  private val tagRepository: TagRepository
) {

    fun findAllUsers(): List<User> = repository.findAll()

    fun getUserByUsername(username: String): User = repository.findByUsername(username)

    fun saveUser(user: UserDto): User {
        val newUser = User(user.username, user.password, LocalDateTime.now())
        return repository.save(newUser)
    }

    fun existsByUsername(username: String): Boolean {
        return repository.existsByUsername(username)
    }

    fun likePost(username: String, postId: Long): User {
        val user = repository.findByUsername(username)
        val likedPosts = user.postsLiked.toMutableList()
        var post = likedPosts.find { it.id == postId }
        if (post != null) {
            post.likes -= 1
            likedPosts.remove(post)
        } else {
            post = postRepository.findById(postId).get()
            post.likes += 1
            likedPosts.add(post)
        }
        postRepository.save(post)
        return repository.save(User(user.username, user.password, user.dateJoined, user.postsCreated, user.commentsCreated, likedPosts, user.postsFollowed, user.tagsFollowed))
    }

    fun followPost(username: String, postId: Long): User {
        val user = repository.findByUsername(username)
        val postsFollowed = user.postsFollowed.toMutableList()
        var post = postsFollowed.find { it.id == postId }
        if (post != null) {
            postsFollowed.remove(post)
        } else {
            post = postRepository.findById(postId).get()
            postsFollowed.add(post)
        }
        return repository.save(User(user.username, user.password, user.dateJoined, user.postsCreated, user.commentsCreated, user.postsLiked, postsFollowed, user.tagsFollowed))
    }

    fun followTag(username: String, tagName: String): User {
        val user = repository.findByUsername(username)
        val tagsFollowed = user.tagsFollowed.toMutableList()
        var tag = tagsFollowed.find { it.name == tagName }
        if (tag != null) {
            tagsFollowed.remove(tag)
        } else {
            tag = tagRepository.findByNameIgnoreCase(tagName)
            tagsFollowed.add(tag!!)
        }
        return repository.save(User(user.username, user.password, user.dateJoined, user.postsCreated, user.commentsCreated, user.postsLiked, user.postsFollowed, tagsFollowed))
    }
}