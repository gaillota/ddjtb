# Daily dad jokes - Twitter bot

## Workflows

1) Follow people tweeting with trending hashtags
    - Every *time range* (eg. hour), pick *count* (eg. 5) random tweets containing a trending hashtag, and follow the account.
    - Add account to stack of followings
    - Repeat for *x* trending hashtags
    - Store:
        - Followed people (for unfollowing)
        - Hashtags used

2) Follow people who retweet/liked tweet
    - Everytime an account retweet or like a tweet, follow it.
    - Add account to stack of followings

3) Clear followings
    - Every day, clear (unfollow) the stack of followings
    
