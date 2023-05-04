package com.sorsix.forum.service

import com.sorsix.forum.repository.PostRepository
import com.sorsix.forum.domain.Post
import com.sorsix.forum.domain.PostDto
import com.sorsix.forum.domain.Tag
import com.sorsix.forum.repository.TagRepository
import com.sorsix.forum.repository.UserRepository
import org.springframework.stereotype.Service

@Service
class PostService(
    private val repository: PostRepository,
    private val tagRepository: TagRepository,
    private val userRepository: UserRepository
) {

    fun findAllPosts(): List<Post> = repository.findAll()

    fun findById(id: Long): Post = repository.findById(id).get()

    fun createPost(post: PostDto, username: String): Post {
        val tags = post.tagNames.map { tagRepository.findByNameIgnoreCase(it) ?: tagRepository.save(Tag(it)) }
        val user = userRepository.findByUsername(username)
        val newPost = Post(0L, post.title, post.text, 0, 0, tags, user)
        return repository.save(newPost)
    }

    fun editPost(oldPostId: Long, post: PostDto): Post {
        val tags = tagRepository.findAllById(post.tagNames)
        val oldPost = repository.findById(oldPostId).get()
        val newPost = Post(oldPostId, post.title, post.text, oldPost.likes, oldPost.dislikes, tags, oldPost.createdBy)
        return repository.save(newPost)
    }

    fun findAllPostsByUser(username: String): List<Post> = repository
        .findAll()
        .stream()
        .filter { it.createdBy.username == username }
        .toList()

    fun findAllPostsByTag(tag: String): List<Post> {
        val tagObj = tagRepository.findByNameIgnoreCase(tag)
        return repository.findAll().stream().filter { it.tags.contains(tagObj) }.toList()
    }

    fun deletePost(postId: Long) = repository.deleteById(postId)


}