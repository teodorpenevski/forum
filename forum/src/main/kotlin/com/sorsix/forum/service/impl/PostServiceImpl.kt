package com.sorsix.forum.service.impl

import com.sorsix.forum.repository.PostRepository
import com.sorsix.forum.service.PostService
import com.sorsix.forum.domain.Post
import com.sorsix.forum.domain.PostDto
import com.sorsix.forum.repository.TagRepository
import com.sorsix.forum.repository.UserRepository
import org.springframework.stereotype.Service

@Service
class PostServiceImpl(
    private val repository: PostRepository,
    private val tagRepository: TagRepository,
    private val userRepository: UserRepository
) : PostService {

    override fun findAllPosts(): List<Post> = repository.findAll()

    override fun findById(id: Long): Post = repository.findById(id).get()

    override fun createPost(post: PostDto, tagIds: List<Long>, username: String): Post {
        val tags = tagRepository.findAllById(tagIds)
        val user = userRepository.findByUsername(username)
        val newPost = Post(0L, post.title, post.text, 0, 0, tags, user)
        return repository.save(newPost)
    }

    override fun findAllPostsByUser(username: String): List<Post> = repository
        .findAll()
        .stream()
        .filter { it.createdBy.username == username }
        .toList()

    override fun findAllPostsByTag(tag: String): List<Post> {
        val tagObj = tagRepository.findByNameIgnoreCase(tag)
        return repository.findAll().stream().filter { it.tags.contains(tagObj) }.toList()
    }

    override fun deletePost(postId: Long) = repository.deleteById(postId)


}