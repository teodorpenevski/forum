package com.sorsix.forum.api

import com.sorsix.forum.domain.Comment
import com.sorsix.forum.domain.CommentDto
import com.sorsix.forum.service.CommentService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/comments")
class CommentController(val service: CommentService) {

    @GetMapping
    fun getComments(): ResponseEntity<List<Comment>> {
        return if (service.findAllComments().isNotEmpty()) {
            ResponseEntity.ok(service.findAllComments())
        } else ResponseEntity.noContent().build()
    }

    @GetMapping("/{id}")
    fun getCommentsForPost(@PathVariable id: Long): ResponseEntity<List<Comment>> {
        return if (service.findAllCommentsForPost(id).isNotEmpty()) {
            ResponseEntity.ok(service.findAllCommentsForPost(id))
        } else ResponseEntity.noContent().build()
    }
}