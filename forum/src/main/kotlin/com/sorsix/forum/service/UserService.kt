package com.sorsix.forum.service

import com.sorsix.forum.domain.User
import com.sorsix.forum.domain.UserDto
import com.sorsix.forum.repository.UserRepository
import org.springframework.stereotype.Service
import java.time.LocalDateTime
import java.util.*

@Service
class UserService(private val repository: UserRepository) {

    fun findAllUsers(): List<User> = repository.findAll()

    fun getUserByUsername(username: String): User = repository.findByUsername(username)

    fun saveUser(user: UserDto): User {
        val newUser = User(user.username, user.password, LocalDateTime.now())
        return repository.save(newUser)
    }

    fun existsByUsername(username: String): Boolean {
        return repository.existsByUsername(username)
    }

//    fun likePost(username: String, postId: Long): User {
//        val user = repository.findByUsername(username)
//        val post = user.postsLiked.find { it.id == postId }
//        if (post != null) {
//            user.postsLiked.remove(post)
//        } else {
//            user.postsLiked.add(post)
//        }
//        return repository.save(user)
//    }
//
//    fun followPost(username: String, postId: Long): User {
//        val user = repository.findByUsername(username)
//        val post = user.postsFollowed.find { it.id == postId }
//        if (post != null) {
//            user.postsFollowed.remove(post)
//        } else {
//            user.postsFollowed.add(post)
//        }
//        return repository.save(user)
//    }
//
//    fun followTag(username: String, tagId: Long): User {
//        val user = repository.findByUsername(username)
//        val tag = user.tagsFollowed.find { it.id == tagId }
//        if (tag != null) {
//            user.tagsFollowed.remove(tag)
//        } else {
//            user.tagsFollowed.add(tag)
//        }
//        return repository.save(user)
//    }
}