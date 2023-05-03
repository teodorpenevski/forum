package com.sorsix.forum.domain

import com.fasterxml.jackson.annotation.JsonBackReference
import jakarta.persistence.*

@Entity
@Table(name = "comments")
data class Comment(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    val id: Long,
    val comment: String,
    @ManyToOne
    @JsonBackReference
    val createdBy: User,
    @ManyToOne
    @JsonBackReference
    val post: Post,
)
