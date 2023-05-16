package com.sorsix.forum.domain

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonManagedReference
import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "posts")
data class Post(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    val id: Long,
    val title: String,
    val text: String,
    var likes: Int = 0,
    var dislikes: Int = 0,
    @ManyToMany
    @JoinTable(
        name = "posts_tags",
        joinColumns = [JoinColumn(name = "posts_id")],
        inverseJoinColumns = [JoinColumn(name = "tags_name")]
    )
    @JsonManagedReference
    val tags: List<Tag> = listOf(),
    @ManyToOne
    @JoinColumn(name = "username")
    @JsonBackReference
    val createdBy: User,
    @OneToMany(mappedBy = "post")
    @JsonManagedReference
    val comments: List<Comment> = listOf(),
    @ManyToMany(mappedBy = "postsLiked")
    @JsonBackReference
    val likedBy: List<User> = listOf(),
    @ManyToMany(mappedBy = "postsDisliked")
    @JsonBackReference
    val dislikedBy: List<User> = listOf(),
    @ManyToMany(mappedBy = "postsFollowed")
    @JsonBackReference
    val followedBy: List<User> = listOf(),
    val createdAt: LocalDateTime = LocalDateTime.now(),
    val updatedAt: LocalDateTime = LocalDateTime.now(),
) {
}