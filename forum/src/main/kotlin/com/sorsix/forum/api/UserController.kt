package com.sorsix.forum.api

import com.sorsix.forum.domain.User
import com.sorsix.forum.domain.UserDto
import com.sorsix.forum.service.PostService
import com.sorsix.forum.service.UserService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/users")
class UserController(
    val service: UserService,
    val postService: PostService,
) {

    @GetMapping
    fun getUsers(): ResponseEntity<List<User>> {
        return if (service.findAllUsers().isNotEmpty()) {
            ResponseEntity.ok(service.findAllUsers())
        } else ResponseEntity.noContent().build()
    }

    @PostMapping
    fun saveUser(@RequestBody user: UserDto) {
        service.saveUser(user)
    }

    @GetMapping("/{username}")
    fun getUserByUsername(@PathVariable username: String): ResponseEntity<User> =
        ResponseEntity.ok(service.getUserByUsername(username))

//    @PostMapping("/{username}/likePost/{postId}")
//    fun likePost(@PathVariable username: String, @PathVariable postId: Long) {
//        service.likePost(username, postId)
//        postService.likePost(username, postId)
//    }
//
//    @PostMapping("/{username}/followPost/{postId}")
//    fun followPost(@PathVariable username: String, @PathVariable postId: Long) {
//        service.followPost(username, postId)
//    }
//
//    @PostMapping("/{username}/followTag/{tagId}")
//    fun followTag(@PathVariable username: String, @PathVariable tagId: Long) {
//        service.followTag(username, tagId)
//    }
}