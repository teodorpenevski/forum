package com.sorsix.forum.api

import com.sorsix.forum.domain.User
import com.sorsix.forum.domain.UserDto
import com.sorsix.forum.service.PostService
import com.sorsix.forum.service.UserService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = ["http://localhost:4200"])
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

    @PostMapping("/login")
    fun login(@RequestBody userDto: UserDto): ResponseEntity<User> =
        ResponseEntity.ok(service.loginUser(userDto))


    @GetMapping("/current")
    fun getLoggedInUser(): String? = service.getCurrentUser()

    @GetMapping("/{username}")
    fun getUserByUsername(@PathVariable username: String): ResponseEntity<User> =
        ResponseEntity.ok(service.getUserByUsername(username))

    @GetMapping("/{username}/voteStatus/{postId}")
    fun getVoteStatus(@PathVariable username: String, @PathVariable postId: Long): Int {
        return service.getVoteStatus(username, postId)
    }

    @GetMapping("/{username}/followStatus/{postId}")
    fun isPostFollowed(@PathVariable username: String, @PathVariable postId: Long): Boolean {
        return service.isPostFollowed(username, postId)
    }

    @PostMapping("/{username}/likePost/{postId}")
    fun likePost(@PathVariable username: String, @PathVariable postId: Long) {
        service.likePost(username, postId)
    }

    @PostMapping("/{username}/dislikePost/{postId}")
    fun dislikePost(@PathVariable username: String, @PathVariable postId: Long) {
        service.dislikePost(username, postId)
    }

    @PostMapping("/{username}/followPost/{postId}")
    fun followPost(@PathVariable username: String, @PathVariable postId: Long) {
        service.followPost(username, postId)
    }

    @PostMapping("/{username}/followTag/{tagName}")
    fun followTag(@PathVariable username: String, @PathVariable tagName: String) {
        service.followTag(username, tagName)
    }
}