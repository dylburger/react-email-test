import { Container } from '@react-email/container';
import { Head } from '@react-email/head';
import { Html } from '@react-email/html';
import { Section } from '@react-email/section';
import { Tailwind } from '@react-email/tailwind';
import * as React from 'react';

export default function Email() {
  return (
    <Tailwind>
    <Html>
      <Head />
      <Section>
        <Container className="bg-green-600 sm:bg-yellow-500 md:bg-red-500">
          <p className="text-sm sm:text-lg md:text-2xl">Hello world</p>
        </Container>
      </Section>
    </Html>
    </Tailwind>
  );
}