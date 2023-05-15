package com.sorsix.forum.service

import com.sorsix.forum.domain.Comment
import com.sorsix.forum.domain.CommentDto
import com.sorsix.forum.repository.CommentRepository
import org.springframework.stereotype.Service

@Service
class CommentService(private val repository: CommentRepository) {
    fun findAllComments(): List<Comment> = repository.findAll()

    fun findById(id: Long): Comment = repository.findById(id).get()

    fun findAllCommentsByUser(username: String): List<Comment> =
        repository
            .findAll()
            .stream()
            .filter { it.createdBy.username == username }
            .toList()

    fun findAllCommentsForPost(postId: Long): List<Comment> = repository
        .findAll()
        .stream()
        .filter { it.post.id == postId }.toList()

    fun editComment(commentId: Long, comment: String): Comment {
        val oldComment = this.findById(commentId)
        return repository.save(Comment(oldComment.id, comment, oldComment.likes, oldComment.dislikes, oldComment.createdBy, oldComment.post))
    }

    fun deleteComment(commentId: Long) = repository.deleteById(commentId)

    fun saveComment(comment: Comment): Comment = repository.save(comment)

}