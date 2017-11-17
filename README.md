# react-infinite-scrolling

First import the component:

```
import InfiniteScrolling from 'react-infinite-scrolling';
```

and then use it to wrap anything you need:

```jsx
<InfiniteScrolling handleBottomReach={fetchMorePosts}>
  <YourComponent />
</InfiniteScrolling>
```
