package com.sorsix.forum.api

import com.fasterxml.jackson.core.JsonEncoding
import com.fasterxml.jackson.core.JsonParser
import com.fasterxml.jackson.databind.util.JSONPObject
import com.sorsix.forum.domain.Comment
import com.sorsix.forum.domain.CommentDto
import com.sorsix.forum.domain.UserDto
import com.sorsix.forum.service.CommentService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/comments")
@CrossOrigin(origins = ["http://localhost:4200"])
class CommentController(val service: CommentService) {

    @GetMapping
    fun getComments(): ResponseEntity<List<Comment>> {
        return if (service.findAllComments().isNotEmpty()) {
            ResponseEntity.ok(service.findAllComments())
        } else ResponseEntity.noContent().build()
    }

    @GetMapping("/{commentId}")
    fun getCommentById(@PathVariable commentId: Long): Comment {
        return service.findById(commentId)
    }

    @GetMapping("/{commentId}/user")
    fun getCommentCreator(@PathVariable commentId: Long): UserDto {
        return UserDto(service.findById(commentId).createdBy.username, "")
    }

    @PostMapping("/edit/{id}")
    fun editComment(@RequestBody comment: CommentDto, @PathVariable id: String): ResponseEntity<Comment> {
        return ResponseEntity.ok(service.editComment(id.toLong(), comment.text))
    }

    @DeleteMapping("/delete/{id}")
    fun deleteComment(@PathVariable id: Long) =
        service.deleteComment(id)

}