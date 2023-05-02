package com.sorsix.forum.service.impl

import com.sorsix.forum.domain.Post
import com.sorsix.forum.domain.Tag
import com.sorsix.forum.repository.TagRepository
import com.sorsix.forum.service.TagService
import org.springframework.stereotype.Service

@Service
class TagService(
    private val repository: TagRepository
) : TagService {

    override fun findAllTags() = repository.findAll()

    override fun findTagById(id: Long): Tag = repository.findById(id).get()

    override fun findTagByName(name: String): Tag = repository.findByNameIgnoreCase(name)

    override fun createTag(tag: Tag): Tag = repository.save(tag)

    override fun deleteTag(tagId: Long) = repository.deleteById(tagId)

    override fun findPostsForTag(tagName: String): List<Post> = repository.findByNameIgnoreCase(tagName).posts

    override fun tagExists(tagName: String): Boolean = repository.existsByNameIgnoreCase(tagName)

}