import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

const types = ['Permission', 'Intents'] as const

export default function App() {
    const navigate = useNavigate()

    return (
        <>
            <h1>Emporium Playground</h1>

            <div>
                {types.map((type) => (
                    <Button
                        key={type}
                        onClick={() => navigate(`/${type.toLowerCase()}`)}
                    >
                        {type}
                    </Button>
                ))}
            </div>
        </>
    )
}
