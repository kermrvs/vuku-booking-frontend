export default function () {
  const router = useRouter();
  function back() {
    router.push('/')
  }

  function next(url) {
    router.push(url)
  }

  return {back, next};
}