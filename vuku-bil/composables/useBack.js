export default function () {
  const router = useRouter();
  function back() {
    router.go(-1)
  }

  return {back};
}