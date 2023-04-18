package com.sorsix.forum.service

import com.sorsix.forum.domain.Post
import com.sorsix.forum.domain.Tag

interface TagService {
    fun findAllTags(): List<Tag>
    fun findTagById(id: Long) : Tag
    fun findTagByName(name: String): Tag
    fun createTag(tag: Tag): Tag
    fun deleteTag(tagId: Long)
    fun findPostsForTag(tagName: String): List<Post>
    fun tagExists(tagName: String): Boolean
}