package com.sorsix.forum.service.impl

import com.sorsix.forum.domain.Comment
import com.sorsix.forum.domain.CommentDto
import com.sorsix.forum.repository.CommentRepository
import com.sorsix.forum.service.CommentService
import org.springframework.stereotype.Service

@Service
class CommentServiceImpl(private val repository: CommentRepository) : CommentService {
    override fun findAllComments(): List<Comment> = repository.findAll()

    override fun findById(id: Long): Comment = repository.findById(id).get()

    override fun findAllCommentsByUser(username: String): List<Comment> =
        repository
            .findAll()
            .stream()
            .filter { it.createdBy.username == username }
            .toList()

    override fun findAllCommentsForPost(postId: Long): List<Comment> = repository
        .findAll()
        .stream()
        .filter { it.post.id == postId }.toList()

    override fun editComment(comment: Comment): Comment {
        return repository.save(comment)
    }

    override fun deleteComment(commentId: Long) = repository.deleteById(commentId)

    override fun saveComment(comment: Comment): Comment = repository.save(comment)

}