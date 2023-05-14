package com.sorsix.forum.service.util

import org.springframework.stereotype.Component

@Component
class GlobalState {
    var loggedInUser: String? = ""
}