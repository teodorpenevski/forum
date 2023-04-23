package com.sorsix.forum.service

import com.sorsix.forum.domain.Comment
import com.sorsix.forum.domain.CommentDto

interface CommentService {
    fun findAllComments(): List<Comment>
    fun findById(id: Long): Comment
    fun findAllCommentsByUser(username: String): List<Comment>
    fun findAllCommentsForPost(postId: Long): List<Comment>
    fun editComment(comment: CommentDto): Comment
    fun deleteComment(commentId: Long)
    fun saveComment(comment: Comment): Comment
}