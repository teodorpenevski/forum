package com.sorsix.forum.repository

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import com.sorsix.forum.domain.Post
import org.springframework.data.jpa.repository.Query

@Repository
interface PostRepository : JpaRepository<Post, Long> {
}