package com.sorsix.forum.service

import com.sorsix.forum.repository.PostRepository
import com.sorsix.forum.domain.Post
import com.sorsix.forum.domain.PostDto
import com.sorsix.forum.domain.Tag
import com.sorsix.forum.repository.TagRepository
import com.sorsix.forum.repository.UserRepository
import com.sorsix.forum.service.util.GlobalState
import org.springframework.stereotype.Service
import java.util.*

@Service
class PostService(
    private val repository: PostRepository,
    private val tagRepository: TagRepository,
    private val userRepository: UserRepository,
    private val globalState: GlobalState
) {

    fun findAllPosts(): List<Post> = repository.findAll()

    fun findAllPostIds(tagsString: String, sort: String, noComments: String): List<Long> {
        val tagObjects = if (tagsString == "followed-tags") {
            val user = userRepository.findByUsername(globalState.loggedInUser!!)
            user.tagsFollowed
        } else {
            val tags = tagsString.split("-")
            tagRepository.findAllById(tags.map { it.lowercase() })
        }
        var posts = repository.findAll().stream().filter { it.tags.containsAll(tagObjects) }.toList()
        when (sort) {
            "created" -> {
                posts = posts.sortedByDescending { it.createdAt }
            }
            "highest-votes" -> {
                posts = posts.sortedByDescending { it.likes - it.dislikes }
            }
            "likes" -> {
                posts = posts.sortedByDescending { it.likes }
            }
            "dislikes" -> {
                posts = posts.sortedByDescending { it.dislikes }
            }
            "comments" -> {
                posts = posts.sortedByDescending { it.comments.size }
            }
        }
        if (noComments == "true") {
            posts = posts.filter { it.comments.isEmpty() }
        }
        return posts.map { it.id }.toList()
    }

    fun findById(id: Long): Post = repository.findById(id).get()

    fun findAllPostIdsByTags(tags: List<String>): List<Long> {
        val tagObjects = tagRepository.findAllById(tags.map { it.lowercase() })
        return repository.findAll().stream().filter { it.tags.containsAll(tagObjects) }.map { it.id }.toList()
    }

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