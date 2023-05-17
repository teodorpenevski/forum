package com.sorsix.forum.service

import com.sorsix.forum.domain.Comment
import com.sorsix.forum.repository.CommentRepository
import com.sorsix.forum.repository.UserRepository
import org.springframework.stereotype.Service

@Service
class CommentService(private val repository: CommentRepository,
                     private val userRepository: UserRepository) {
    fun findAllComments(): List<Comment> = repository.findAll()

    fun findById(id: Long): Comment = repository.findById(id).get()

    fun findAllCommentsByUser(username: String): List<Comment> =
        repository
            .findAll()
            .stream()
            .filter { it.createdBy.username == username }
            .toList()

    fun findAllCommentsForPost(postId: Long, sort: String, ascending: String): List<Comment> {
        var comments = repository.findAll().stream().filter { it.post.id == postId }.toList()
        when (sort) {
            "created" -> {
                comments = comments.sortedByDescending { it.createdAt }
            }
            "votes" -> {
                comments = comments.sortedBy { it.likes - it.dislikes }
            }
        }
        if (ascending == "false") comments.reverse()
        return comments
    }

    fun editComment(commentId: Long, comment: String): Comment {
        val oldComment = this.findById(commentId)
        return repository.save(Comment(oldComment.id, comment, oldComment.likes, oldComment.dislikes, oldComment.createdBy, oldComment.post))
    }

    fun deleteComment(commentId: Long) {
        val comment = this.findById(commentId)
        comment.likedBy.forEach { userRepository.save(it.copy(commentsLiked = it.commentsLiked.filter { it.id != commentId })) }
        comment.dislikedBy.forEach { userRepository.save(it.copy(commentsDisliked = it.commentsDisliked.filter { it.id != commentId })) }
        repository.deleteById(commentId)
    }

    fun saveComment(comment: Comment): Comment = repository.save(comment)

}