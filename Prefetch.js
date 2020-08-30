import { useRouter } from 'next/router'

export default () => {
    const router = useRouter()

    useEffect(() => {
        router.prefetch('/login')
    })
}