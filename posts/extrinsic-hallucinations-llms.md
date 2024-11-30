---
title: Extrinsic Hallucinations in LLMs
date: July 7, 2024
readingTime: 30 min
author: Lilian Weng
---

Hallucination in large language models usually refers to the model generating unfaithful, fabricated,
inconsistent, or nonsensical content. As a term, hallucination has been somewhat generalized to cases
when the model makes mistakes. Here, I would like to narrow down the problem of hallucination to cases
where the model output is fabricated and not grounded by either the provided context or world knowledge.

There are two types of hallucination:

1. **In-context hallucination:** The model output should be consistent with the source content in context.
2. **Extrinsic hallucination:** The model output should be grounded by the pre-training dataset.

## Understanding Hallucinations

When we talk about hallucinations in LLMs, we're really discussing a spectrum of behaviors that can range
from minor factual inconsistencies to complete fabrications. The key distinction lies in understanding
whether the model is:

1. Misinterpreting available context
2. Fabricating information entirely
3. Mixing different pieces of knowledge incorrectly

## Impact on AI Safety

The presence of hallucinations in LLM outputs raises significant concerns for AI safety and reliability:

- **Trust Issues**: Users may not be able to distinguish between accurate and hallucinated information
- **Propagation of Misinformation**: Hallucinated content can be spread and cited by others
- **Safety-Critical Applications**: In medical, legal, or financial contexts, hallucinations could have serious consequences
