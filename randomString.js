function randomString(length) {
  return Array(Math.ceil(length / 10))
    .fill()
    .map(() => Math.random()
      .toString(36)
      .replace('0.', '')
    )
    .join('')
    .slice(0, length);
}
