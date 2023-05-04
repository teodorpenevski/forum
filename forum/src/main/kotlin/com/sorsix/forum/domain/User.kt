package com.sorsix.forum.domain

import com.fasterxml.jackson.annotation.JsonManagedReference
import jakarta.persistence.*
import java.time.LocalDateTime


@Entity
@Table(name = "users")
data class User(
    @Id
    val username: String,
    val password: String,
    val dateJoined: LocalDateTime,
    @OneToMany(mappedBy = "createdBy")
    @JsonManagedReference
    val postsCreated: List<Post> = listOf(),
    @OneToMany(mappedBy = "createdBy")
    @JsonManagedReference
    val commentsCreated: List<Comment> = listOf(),
    @ManyToMany
    @JoinTable(
        name = "postsLiked",
        joinColumns = [JoinColumn(name = "username")],
        inverseJoinColumns = [JoinColumn(name = "post_id")]
    )
    @JsonManagedReference
    val postsLiked: List<Post> = listOf(),
    @ManyToMany
    @JoinTable(
        name = "postsFollowed",
        joinColumns = [JoinColumn(name = "username")],
        inverseJoinColumns = [JoinColumn(name = "post_id")]
    )
    @JsonManagedReference
    val postsFollowed: List<Post> = listOf(),
    @ManyToMany
    @JoinTable(
        name = "tagsFollowed",
        joinColumns = [JoinColumn(name = "username")],
        inverseJoinColumns = [JoinColumn(name = "post_name")]
    )
    @JsonManagedReference
    val tagsFollowed: List<Tag> = listOf()
) {
}