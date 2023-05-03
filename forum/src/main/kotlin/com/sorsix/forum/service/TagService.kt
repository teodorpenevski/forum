package com.sorsix.forum.service

import com.sorsix.forum.domain.Post
import com.sorsix.forum.domain.Tag
import com.sorsix.forum.repository.TagRepository
import org.springframework.stereotype.Service

@Service
class TagService(
    private val repository: TagRepository
) {

    fun findAllTags(): MutableList<Tag> = repository.findAll()

    fun findTag(tagName: String): Tag = repository.findByNameIgnoreCase(tagName)

    fun createTag(tag: Tag): Tag = repository.save(tag)

    fun deleteTag(tagName: String) = repository.deleteById(tagName)

    fun findPostsForTag(tagName: String): List<Post> = repository.findByNameIgnoreCase(tagName).posts

    fun tagExists(tagName: String): Boolean = repository.existsByNameIgnoreCase(tagName)

}