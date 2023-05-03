package com.sorsix.forum.domain

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.annotation.JsonManagedReference
import jakarta.persistence.*

@Entity
@Table(name = "tags")
data class Tag(
    @Id
    val name: String,
    @ManyToMany(mappedBy = "tags")
    @JsonBackReference
    val posts: List<Post> = listOf()
)
