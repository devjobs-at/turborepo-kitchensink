import { ImageResponse } from "@vercel/og";

export const vercelOgResponse = () => {
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%'
          }}
        >
          <h1>Welcome to Remix - Library Response</h1>
        </div>
      )
    );
}