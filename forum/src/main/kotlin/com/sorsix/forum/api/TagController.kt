package com.sorsix.forum.api

import com.sorsix.forum.domain.Post
import com.sorsix.forum.domain.Tag
import com.sorsix.forum.service.TagService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/tags")
class TagController(val service: TagService) {

    @GetMapping
    fun getTags(): ResponseEntity<List<Tag>> {
        return if(service.findAllTags().isNotEmpty()){
            ResponseEntity.ok(service.findAllTags())
        } else ResponseEntity.noContent().build()
    }

    @PostMapping
    fun createTag(@RequestBody tag: Tag){
        service.createTag(tag)
    }

    @GetMapping("/{name}")
    fun getPostsForTag(@PathVariable name: String) : ResponseEntity<List<Post>>{
        return if(service.tagExists(name)){
            ResponseEntity.ok(service.findPostsForTag(name))
        } else ResponseEntity.notFound().build()
    }
}