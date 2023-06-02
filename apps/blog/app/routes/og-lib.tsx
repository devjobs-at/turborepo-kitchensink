import type { LoaderFunction } from '@vercel/remix';
import { vercelOgResponse } from 'ui';

export const config = { runtime: 'edge' };

export const loader: LoaderFunction = async () => vercelOgResponse()