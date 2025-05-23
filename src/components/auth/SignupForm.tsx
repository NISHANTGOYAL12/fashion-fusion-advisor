
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Link } from 'react-router-dom';
import { Facebook, Github, Twitter } from 'lucide-react';
import { Separator } from '../ui/separator';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signup, loginWithSocialMedia } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !password) return;

    try {
      setIsSubmitting(true);
      await signup(email, password, name);
    } catch (error) {
      // Error is handled in the auth context
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSocialSignup = async (provider: string) => {
    try {
      setIsSubmitting(true);
      await loginWithSocialMedia(provider);
    } catch (error) {
      // Error is handled in the auth context
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-serif">Create Account</CardTitle>
        <CardDescription>Enter your details to create a new account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="text-xs text-fashion-gray">Password must be at least 8 characters long</p>
          </div>
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting || password.length < 8}
          >
            {isSubmitting ? 'Creating account...' : 'Create Account'}
          </Button>
          
          <div className="flex items-center gap-4 my-4">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">OR</span>
            <Separator className="flex-1" />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => handleSocialSignup('facebook')}
              disabled={isSubmitting}
              className="flex items-center justify-center"
            >
              <Facebook className="h-5 w-5 text-blue-600" />
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => handleSocialSignup('twitter')}
              disabled={isSubmitting}
              className="flex items-center justify-center"
            >
              <Twitter className="h-5 w-5 text-sky-500" />
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => handleSocialSignup('github')}
              disabled={isSubmitting}
              className="flex items-center justify-center"
            >
              <Github className="h-5 w-5" />
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-fashion-gray">
          Already have an account?{' '}
          <Link to="/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignupForm;
