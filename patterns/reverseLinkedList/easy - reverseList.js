// this video is pretty good: https://www.youtube.com/watch?v=O0By4Zq0OFc
const reverseList = head => {
  let prev = null, curr = head, next = null;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}