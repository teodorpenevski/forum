package com.sorsix.forum.domain

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonIdentityInfo
import com.fasterxml.jackson.annotation.JsonManagedReference
import com.fasterxml.jackson.annotation.ObjectIdGenerators
import jakarta.persistence.*
import java.time.LocalDateTime
import kotlin.reflect.jvm.internal.impl.load.kotlin.JvmType

@Entity
@Table(name = "posts")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator::class, property = "id")
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