package com.sorsix.forum.domain

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonManagedReference
import jakarta.persistence.*
import lombok.Getter

@Entity
@Getter
data class Post(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    val id: Long,
    val title: String,
    val text: String,
    var likes: Int = 0,
    var dislikes: Int = 0,
    @ManyToMany
    @JsonBackReference
    val tags: List<Tag> = listOf(),
    @ManyToOne
    @JsonBackReference
    val createdBy: User,
    @OneToMany(mappedBy = "post")
    @JsonManagedReference
    val comments: List<Comment> = listOf(),
    @ManyToMany(mappedBy = "postsLiked")
    @JsonBackReference
    val likedBy: Set<User> = SetOf(),
    @ManyToMany(mappedBy = "postsFollowed")
    @JsonBackReference
    val followedBy: Set<User> = SetOf(),
) {
}