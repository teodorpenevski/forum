package com.sorsix.forum.domain

import com.fasterxml.jackson.annotation.JsonBackReference
import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "comments")
data class Comment(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    val id: Long,
    val comment: String,
    var likes: Int = 0,
    var dislikes: Int = 0,
    @ManyToOne
    @JsonBackReference
    val createdBy: User,
    @ManyToOne
    @JsonBackReference
    val post: Post,
    @ManyToMany(mappedBy = "commentsLiked")
    @JsonBackReference
    val likedBy: List<User> = listOf(),
    @ManyToMany(mappedBy = "commentsDisliked")
    @JsonBackReference
    val dislikedBy: List<User> = listOf(),
    val createdAt: LocalDateTime = LocalDateTime.now()
)
