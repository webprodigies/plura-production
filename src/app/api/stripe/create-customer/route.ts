import { stripe } from '@/lib/stripe'
import { StripeCustomerType } from '@/lib/types'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { address, email, name, shipping }: StripeCustomerType =
    await req.json()

  if (!email || !address || !name || !shipping)
    return new NextResponse('Missing data', {
      status: 400,
    })
  try {
    const customer = await stripe.customers.create({
      email,
      name,
      address,
      shipping,
    })
    return Response.json({ customerId: customer.id })
  } catch (error) {
    console.log('🔴 Error', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
