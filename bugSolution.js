```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  const handleClick = () => {
    if (!isNavigating) {
      setIsNavigating(true);
      router.push('/');
      setTimeout(() => {
        setIsNavigating(false);
      }, 500); // Adjust timeout as needed
    }
  };
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick} disabled={isNavigating}>
        Go to Home
      </button>
    </div>
  );
}
```