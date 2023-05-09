package com.sorsix.forum.api

import com.sorsix.forum.domain.Post
import com.sorsix.forum.domain.Tag
import com.sorsix.forum.service.TagService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/tags")
@CrossOrigin(origins = ["http://localhost:4200"])
class TagController(val service: TagService) {

    @GetMapping
    fun getTags(): ResponseEntity<List<Tag>> {
        return if(service.findAllTags().isNotEmpty()){
            ResponseEntity.ok(service.findAllTags())
        } else ResponseEntity.noContent().build()
    }

    @PostMapping
    fun createTag(@RequestBody tag: Tag) {
        if (!service.tagExists(tag.name))
            service.createTag(tag)
    }

    @GetMapping("/{name}")
    fun getPostsForTag(@PathVariable name: String) : ResponseEntity<List<Post>>{
        return if(service.tagExists(name)){
            ResponseEntity.ok(service.findPostsForTag(name))
        } else ResponseEntity.notFound().build()
    }
}