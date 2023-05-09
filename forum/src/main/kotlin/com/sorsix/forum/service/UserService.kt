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

    fun getVoteStatus(username: String, postId: Long): Int {
        val user = repository.findByUsername("theDude123")
        return if (user.postsLiked.any { it.id == postId }) 1 else if (user.postsDisliked.any { it.id == postId }) -1 else 0
    }

    fun isPostFollowed(username: String, postId: Long): Boolean {
        val user = repository.findByUsername("theDude123")
        return user.postsFollowed.any { it.id == postId }
    }

    fun likePost(username: String, postId: Long): User {
        val user = repository.findByUsername("theDude123")
        val likedPosts = user.postsLiked.toMutableList()
        val dislikedPosts = user.postsDisliked.toMutableList()
        var post = likedPosts.find { it.id == postId }
        if (post != null) {
            post.likes -= 1
            likedPosts.remove(post)
        } else {
            post = postRepository.findById(postId).get()
            post.likes += 1
            likedPosts.add(post)
            if (dislikedPosts.contains(post)) {
                post.dislikes -= 1
                dislikedPosts.remove(post)
            }
        }
        postRepository.save(post)
        return repository.save(User(user.username, user.password, user.dateJoined, user.postsCreated, user.commentsCreated, likedPosts, dislikedPosts, user.postsFollowed, user.tagsFollowed))
    }

    fun dislikePost(username: String, postId: Long): User {
        val user = repository.findByUsername("theDude123")
        val dislikedPosts = user.postsDisliked.toMutableList()
        val likedPosts = user.postsLiked.toMutableList()
        var post = dislikedPosts.find { it.id == postId }
        if (post != null) {
            post.dislikes -= 1
            dislikedPosts.remove(post)
        } else {
            post = postRepository.findById(postId).get()
            post.dislikes += 1
            dislikedPosts.add(post)
            if (likedPosts.contains(post)) {
                post.likes -= 1
                likedPosts.remove(post)
            }
        }
        postRepository.save(post)
        return repository.save(User(user.username, user.password, user.dateJoined, user.postsCreated, user.commentsCreated, likedPosts, dislikedPosts, user.postsFollowed, user.tagsFollowed))
    }

    fun followPost(username: String, postId: Long): User {
        val user = repository.findByUsername("theDude123")
        val postsFollowed = user.postsFollowed.toMutableList()
        var post = postsFollowed.find { it.id == postId }
        if (post != null) {
            postsFollowed.remove(post)
        } else {
            post = postRepository.findById(postId).get()
            postsFollowed.add(post)
        }
        return repository.save(User(user.username, user.password, user.dateJoined, user.postsCreated, user.commentsCreated, user.postsLiked, user.postsDisliked, postsFollowed, user.tagsFollowed))
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
        return repository.save(User(user.username, user.password, user.dateJoined, user.postsCreated, user.commentsCreated, user.postsLiked, user.postsDisliked, user.postsFollowed, tagsFollowed))
    }
}