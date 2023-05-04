package com.sorsix.forum.domain

import com.fasterxml.jackson.annotation.JsonBackReference
import jakarta.persistence.*

@Entity
@Table(name = "tags")
data class Tag(
    @Id
    val name: String,
    @ManyToMany(mappedBy = "tags")
    @JsonBackReference
    val posts: List<Post> = listOf(),
    @ManyToMany(mappedBy = "tagsFollowed")
    @JsonBackReference
    val followedBy: List<User> = listOf()
)
