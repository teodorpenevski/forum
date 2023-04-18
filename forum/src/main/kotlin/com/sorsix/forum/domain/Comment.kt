package com.sorsix.forum.domain

import com.fasterxml.jackson.annotation.JsonBackReference
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.ManyToOne
import jakarta.persistence.OneToOne

@Entity
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
