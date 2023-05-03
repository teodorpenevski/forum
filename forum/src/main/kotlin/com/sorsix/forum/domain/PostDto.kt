package com.sorsix.forum.domain

class PostDto(
    val title: String,
    val text: String,
    val tagIds: List<String>
)