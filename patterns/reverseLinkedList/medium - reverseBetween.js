const reverseBetween = (head, left, right) => {
  const dummy = new ListNode(0, head);

  let leftPrev = dummy, curr = head;
  let i = 0;
  while (i < left - 1) {
    leftPrev = curr;
    curr = curr.next;
    i++;
  }

  let prev = null, j = 0;
  while (j < right - left + 1) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
    j++;
  }

  leftPrev.next.next = curr;
  leftPrev.next = prev;

  return dummy.next;
}