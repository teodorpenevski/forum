package com.sorsix.forum.api

import com.sorsix.forum.domain.Comment
import com.sorsix.forum.domain.CommentDto
import com.sorsix.forum.domain.Post
import com.sorsix.forum.domain.PostDto
import com.sorsix.forum.service.CommentService
import com.sorsix.forum.service.PostService
import com.sorsix.forum.service.UserService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/posts")
class PostController(
    val service: PostService,
    val userService: UserService,
    val commentService: CommentService,
) {

    @GetMapping
    fun getPosts(): ResponseEntity<List<Post>> {
        return if (service.findAllPosts().isNotEmpty()) {
            ResponseEntity.ok(service.findAllPosts())
        } else ResponseEntity.noContent().build()
    }

    @PostMapping
    fun createPost(@RequestBody postDto: PostDto) {
        service.createPost(postDto, "theDude123")
    }

    @GetMapping("/tag/{tagName}")
    fun getPostsByTag(@PathVariable tagName: String): ResponseEntity<List<Post>> {
        return if (service.findAllPostsByTag(tagName).isNotEmpty()) {
            ResponseEntity.ok(service.findAllPostsByTag(tagName))
        } else ResponseEntity.noContent().build()
    }

    @GetMapping("/{id}")
    fun getPost(@PathVariable id: Long): ResponseEntity<Post> {
        return ResponseEntity.ok(service.findById(id))
    }

    @PostMapping("/{id}/edit")
    fun editPost(@PathVariable id: Long, @RequestBody postDto: PostDto) {
        service.editPost(id, postDto)
    }

    @PostMapping("/{id}/comment")
    fun postComment(@PathVariable id: Long, @RequestBody commentDto: CommentDto) {
        val post = service.findById(id)
        // Change from static user to current user in the future
        val user = userService.getUserByUsername("theDude123")
        val comment = Comment(0, commentDto.text, user, post)
        commentService.saveComment(comment)
    }

    @DeleteMapping("/{id}")
    fun deletePost(@PathVariable id: Long) = service.deletePost(id)

}