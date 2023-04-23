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

    override fun editPost(post: PostDto, oldPostId: Long): Post {
        val tags = tagRepository.findAllById(post.tagIds)
        val oldPost = repository.findById(oldPostId).get()
        val newPost = Post(oldPostId, post.title, post.text, oldPost.likes, oldPost.dislikes, tags, oldPost.createdBy)
        return repository.save(newPost)
    }

    override fun likePost(username: String, postId: Long): Post {
        val user = userRepository.findByUsername(username)
        val post = repository.findById(postId).get()
        val likedPost = user.postsLiked.find { it.id == postId }
        if (likedPost != null) {
            post.likes += 1
        } else {
            post.likes -= 1
        }
        return repository.save(post)
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