const detectCycle = head => {
  // identify cycles
  let slow = head, fast = head, isCycle = false;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      isCycle = true;
      break;
    }
  }

  // find the start of cycle
  let newSlow = head;
  while (isCycle) {
    if (newSlow === slow) {
      return slow;
    }

    newSlow = newSlow.next;
    slow = slow.next;
  }

  return null;
}

// this is actually faster due to fewer loop cycles
// at the expense of using O(N) space
const detectCycleAlternative = head => {
  const linkedListSet = new Set();

  if (head === null) return null;

  let pointer = head;
  while (pointer !== null && pointer.next !== null) {
    if (!linkedListSet.has(pointer)) {
      linkedListSet.add(pointer);
    } else {
      return pointer;
    }

    pointer = pointer.next;
  }

  return null;
}