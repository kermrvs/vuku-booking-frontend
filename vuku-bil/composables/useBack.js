export default function () {
  const router = useRouter();
  function back() {
    router.go(-1)
  }

  function next(url) {
    router.push(url)
  }

  return {back, next};
}