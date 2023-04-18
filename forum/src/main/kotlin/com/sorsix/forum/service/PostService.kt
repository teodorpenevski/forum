package com.sorsix.forum.service

import com.sorsix.forum.domain.Post
import com.sorsix.forum.domain.PostDto

interface PostService {
    fun findAllPosts(): List<Post>
    fun findById(id: Long): Post
    fun createPost(post: PostDto, tagIds: List<Long>, username: String): Post
    fun findAllPostsByUser(username: String): List<Post>
    fun findAllPostsByTag(tag: String): List<Post>
    fun deletePost(postId: Long)
//    fun likeThread(threadId: Long)
}