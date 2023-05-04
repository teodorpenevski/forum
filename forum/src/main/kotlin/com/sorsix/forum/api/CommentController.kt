package com.sorsix.forum.api

import com.sorsix.forum.domain.Comment
import com.sorsix.forum.domain.CommentDto
import com.sorsix.forum.service.CommentService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/comments")
class CommentController(val service: CommentService) {

    @GetMapping
    fun getComments(): ResponseEntity<List<Comment>> {
        return if (service.findAllComments().isNotEmpty()) {
            ResponseEntity.ok(service.findAllComments())
        } else ResponseEntity.noContent().build()
    }

    @GetMapping("/{postId}")
    fun getCommentsForPost(@PathVariable postId: Long): ResponseEntity<List<Comment>> {
        return if (service.findAllCommentsForPost(postId).isNotEmpty()) {
            ResponseEntity.ok(service.findAllCommentsForPost(postId))
        } else ResponseEntity.noContent().build()
    }

    @PostMapping("/edit/{id}")
    fun editComment(@RequestBody comment: CommentDto, @PathVariable id: String): ResponseEntity<Comment> {
        return ResponseEntity.ok(service.editComment(id.toLong(), comment.text))
    }

    @DeleteMapping("/delete/{id}")
    fun deleteComment(@PathVariable id: Long) =
        service.deleteComment(id)

}