const hasCycle = head => {
  if (head === null) return false;

  let slow = head, fast = head.next;

  while (slow !== fast) {
    if (fast === null || fast.next === null) {
      return false;
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
}

const hasCycleAlternative = head => {
  if (head === null) return false;

  // different nodes so our slow === head condition isn't immediately met
  let slow = head, fast = head.next;

  while (fast !== null && fast.next !== null) {
    if (slow === fast) return true;

    slow = slow.next;
    fast = fast.next.next
  }

  return false;
}